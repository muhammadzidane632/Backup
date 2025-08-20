'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { api } from '@/lib/api';
import EnrollButton from './EnrollButton';

type Course = { id: number; title: string; description?: string; price: number };

export default function CoursesList() {
	const [courses, setCourses] = useState<Course[]>([]);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		api.getCourses()
			.then(setCourses)
			.catch((e) => setError(e?.message || 'Gagal memuat daftar kursus'));
	}, []);

	if (error) {
		return <div className="text-red-400">{error}</div>;
	}

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{courses.map((c, index) => (
				<motion.div
					key={c.id}
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: index * 0.05 }}
					viewport={{ once: true }}
					className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 hover:shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300"
				>
					<div className="flex items-start justify-between gap-4 mb-4">
						<h3 className="text-2xl font-bold text-white">{c.title}</h3>
						<div className="text-emerald-400 font-semibold">Rp {c.price.toLocaleString('id-ID')}</div>
					</div>
					<p className="text-white/70 mb-6">{c.description}</p>
					<div className="flex justify-end">
						<EnrollButton courseId={c.id} />
					</div>
				</motion.div>
			))}
		</div>
	);
}


