'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { api, getSession } from '@/lib/api';

type EnrollButtonProps = {
	courseId: number;
	label?: string;
};

export default function EnrollButton({ courseId, label = 'Mulai Belajar' }: EnrollButtonProps) {
	const [loading, setLoading] = useState(false);

	async function handleEnroll() {
		const { token, user } = getSession();
		if (!token || !user) {
			alert('Silakan login terlebih dahulu.');
			return;
		}
		try {
			setLoading(true);
			await api.enroll(token, user.id, courseId);
			alert('Pendaftaran berhasil!');
		} catch (err) {
			alert((err as Error).message || 'Pendaftaran gagal');
		} finally {
			setLoading(false);
		}
	}

	return (
		<motion.button
			whileHover={{ scale: 1.05 }}
			whileTap={{ scale: 0.95 }}
			onClick={handleEnroll}
			disabled={loading}
			className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 disabled:opacity-60"
		>
			{loading ? 'Memproses...' : label}
		</motion.button>
	);
}


