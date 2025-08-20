export type LoginResponse = {
	token: string;
	user: { id: number; name: string; email: string };
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost/ilc-api/api';

async function request<T>(path: string, init?: RequestInit): Promise<T> {
	const res = await fetch(`${API_URL}${path}`, {
		...init,
		headers: {
			'Content-Type': 'application/json',
			...(init && init.headers ? init.headers : {}),
		},
		cache: 'no-store',
	});
	if (!res.ok) {
		let message = 'Request failed';
		try {
			const data = (await res.json()) as any;
			if (data?.error) message = data.error;
		} catch {}
		throw new Error(message);
	}
	return res.json() as Promise<T>;
}

export const api = {
	login: (email: string, password: string) =>
		request<LoginResponse>('/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
		}),
	register: (name: string, email: string, password: string) =>
		request<{ id: number; name: string; email: string }>('/register', {
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
		}),
	getCourses: () => request<Array<{ id: number; title: string; description?: string; price: number }>>('/courses'),
	enroll: (token: string, userId: number, courseId: number) =>
		request<{ status: string }>('/enroll', {
			method: 'POST',
			headers: { Authorization: `Bearer ${token}` },
			body: JSON.stringify({ user_id: userId, course_id: courseId }),
		}),
};

export function saveSession(token: string, user: { id: number; name: string; email: string }) {
	try {
		localStorage.setItem('ilc_token', token);
		localStorage.setItem('ilc_user', JSON.stringify(user));
	} catch {}
}

export function clearSession() {
	try {
		localStorage.removeItem('ilc_token');
		localStorage.removeItem('ilc_user');
	} catch {}
}

export function getSession(): { token: string | null; user: { id: number; name: string; email: string } | null } {
	try {
		const token = localStorage.getItem('ilc_token');
		const raw = localStorage.getItem('ilc_user');
		return { token, user: raw ? JSON.parse(raw) : null };
	} catch {
		return { token: null, user: null };
	}
}


