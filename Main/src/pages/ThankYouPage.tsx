import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Phone, Mail, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ThankYouPage() {
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  const orderDate = new Date().toLocaleDateString('ru-RU');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      {/* <Navigation onContactClick={() => {}} /> */}

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Success Icon */}
            {/* <div className="flex justify-center mb-8">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center animate-bounce">
                <CheckCircle className="w-20 h-20 text-white" />
              </div>
            </div> */}

            {/* Main Message */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-[#1167B1] to-blue-600 bg-clip-text text-transparent font-bold">
                Заказ успешно оформлен!
              </h1>
              <p className="text-xl text-gray-600">
                Благодарим за выбор Pulse Marketing! Наш менеджер свяжется с вами в течение 2 часов для уточнения деталей.
              </p>
            </div>

            {/* Order Info */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl md:text-4xl mb-6">Информация о заказе</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Номер заказа</div>
                  <div className="text-xl text-[#1167B1]">#{orderNumber}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Дата оформления</div>
                  <div className="text-xl">{orderDate}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Статус</div>
                  <div className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                    Обрабатывается
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-gradient-to-r from-[#1167B1] to-blue-600 rounded-2xl p-8 text-white mb-8">
              <h2 className="text-3xl md:text-4xl mb-4">По всем вопросам обращайтесь:</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Телефон</div>
                    <a href="tel:+79991234567" className="text-base hover:underline">
                      +7 (999) 123-45-67
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm opacity-80">Email</div>
                    <a href="mailto:info@pulsemarketing.ru" className="text-base hover:underline">
                      info@pulsemarketing.ru
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <h2 className="text-3xl md:text-4xl mb-6">Что будет дальше?</h2>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1167B1] text-white flex items-center justify-center flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-lg">Связь с менеджером</h3>
                    <p className="text-gray-600 text-base ">
                      В течение 2 часов наш менеджер свяжется с вами для подтверждения заказа
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1167B1] text-white flex items-center justify-center flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-lg">Обсуждение деталей</h3>
                    <p className="text-gray-600 text-base ">
                      Уточним все детали проекта, ответим на ваши вопросы и согласуем сроки
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 items-center">
                  <div className="w-10 h-10 rounded-full bg-[#1167B1] text-white flex items-center justify-center flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-lg">Начало работы</h3>
                    <p className="text-gray-600 text-base ">
                      После согласования всех деталей мы сразу приступим к выполнению вашего заказа
                    </p>
                  </div>
                </div>
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
              <Link to="/catalog">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Продолжить выбор услуг
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
