import newsData from '../../../data/news.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return newsData.articles.map((article) => ({
        id: article.id.toString(),
    }));
}

export default async function NewsArticle({ params }) {
    const { id } = await params;
    const article = newsData.articles.find(a => a.id.toString() === id);

    if (!article) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-gray-50 pb-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-secondary via-gray-900 to-red-900 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <Link href="/news" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                            ← Back to News
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {article.category}
                            </span>
                            <span className="text-gray-300">
                                {article.date}
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            {article.title}
                        </h1>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-primary to-red-700 rounded-full flex items-center justify-center">
                                <span className="text-white font-semibold text-sm">
                                    {article.author.split(' ').map(n => n[0]).join('')}
                                </span>
                            </div>
                            <span className="text-gray-200 font-medium">
                                {article.author}
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Content */}
            <article className="container mx-auto px-4 -mt-10 relative z-10">
                <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden">
                    <div className="bg-gray-200 h-96 flex items-center justify-center">
                        <span className="text-4xl">📰</span>
                    </div>
                    <div className="p-8 md:p-12">
                        <div className="prose prose-lg max-w-none text-gray-600">
                            {article.content.split('\n').map((paragraph, index) => (
                                <p key={index} className="mb-4">{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
