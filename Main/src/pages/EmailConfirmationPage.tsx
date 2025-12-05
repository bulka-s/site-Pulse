import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function EmailConfirmationPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
            <Header />

            <main className="pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto">
                        {/* Email Icon */}
                        {/* <div className="flex justify-center mb-8">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#1167B1] to-blue-600 flex items-center justify-center animate-pulse">
                                <Mail className="w-16 h-16 text-white" />
                            </div>
                        </div> */}

                        {/* Main Message */}
                        <div className="text-center mb-12">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#1167B1] to-blue-600 bg-clip-text text-transparent font-bold">
                                Проверьте почту
                            </h1>
                            <p className="text-xl text-gray-600 mb-4">
                                Мы отправили письмо с подтверждением на ваш email адрес
                            </p>
                            <p className="text-lg text-gray-500">
                                Перейдите по ссылке в письме, чтобы завершить регистрацию
                            </p>
                        </div>

                        {/* Instructions */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                            <h2 className="text-3xl md:text-4xl mb-6">Что делать дальше?</h2>
                            <div className="space-y-4">
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-[#1167B1] text-white flex items-center justify-center flex-shrink-0 mt-1">
                                        1
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1 text-sm">Проверьте папку "Входящие"</h3>
                                        <p className="text-gray-600">
                                            Откройте ваше почтовое приложение или веб-интерфейс
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-[#1167B1] text-white flex items-center justify-center flex-shrink-0 mt-1">
                                        2
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Найдите письмо от Pulse Marketing</h3>
                                        <p className="text-gray-600">
                                            Ищите письмо с темой "Подтверждение email адреса"
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-center">
                                    <div className="w-10 h-10 rounded-full bg-[#1167B1] text-white flex items-center justify-center flex-shrink-0 mt-1">
                                        3
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Нажмите на ссылку подтверждения</h3>
                                        <p className="text-gray-600">
                                            Перейдите по ссылке в письме, чтобы активировать аккаунт
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="bg-gradient-to-r from-[#1167B1] to-blue-600 rounded-2xl p-8 text-white mb-8">
                            <h2 className="text-3xl md:text-4xl mb-4">Не получили письмо?</h2>
                            <div className="space-y-3">
                                <p>✓ Проверьте папку "Спам" или "Нежелательная почта"</p>
                                <p>✓ Убедитесь, что email адрес введен правильно</p>
                                <p>✓ Подождите несколько минут - письмо может идти до 10 минут</p>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/">
                                <Button size="lg" className="bg-[#1167B1] hover:bg-blue-700 w-full sm:w-auto">
                                    Вернуться на главную
                                    <ArrowRight className="w-5 h-5 ml-2" />
                                </Button>
                            </Link>
                            <Button
                                size="lg"
                                variant="outline"
                                className="w-full sm:w-auto"
                                onClick={() => window.location.reload()}
                            >
                                Отправить письмо повторно
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
