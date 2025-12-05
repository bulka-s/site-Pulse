import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Home, Search, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      {/* <Navigation onContactClick={() => {}} /> */}

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-[150px] md:text-[200px] leading-none bg-gradient-to-r from-[#1167B1] to-blue-600 bg-clip-text text-transparent font-bold">
                404
              </h1>
            </div>

            {/* Message */}
            <div className="mb-12">
              <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
                Страница не найдена
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Возможно, страница была удалена или вы перешли по неверной ссылке.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/">
                <Button size="lg" className="bg-[#1167B1] hover:bg-blue-700 w-full sm:w-auto">
                  <Home className="w-5 h-5 mr-2" />
                  Вернуться на главную
                </Button>
              </Link>
              <Link to="/catalog">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  <Search className="w-5 h-5 mr-2" />
                  Перейти в каталог
                </Button>
              </Link>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1167B1]/10 flex items-center justify-center">
                  <Home className="w-6 h-6 text-[#1167B1]" />
                </div>
                <h3 className="text-2xl mb-2">Главная страница</h3>
                <p className="text-sm text-gray-600">
                  Узнайте больше о наших услугах
                </p>
              </Link>

              <Link
                to="/catalog"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1167B1]/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-[#1167B1]" />
                </div>
                <h3 className="text-2xl mb-2">Каталог услуг</h3>
                <p className="text-sm text-gray-600">
                  Полный список наших услуг
                </p>
              </Link>

              <div className="bg-white rounded-xl p-6 shadow-md">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#1167B1]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#1167B1]" />
                </div>
                <h3 className="text-2xl mb-2">Контакты</h3>
                <div className="text-sm text-gray-600 space-y-1">
                  <div>+7 (999) 123-45-67</div>
                  <div>info@pulsemarketing.ru</div>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="mt-16 bg-gradient-to-r from-[#1167B1] to-blue-600 rounded-2xl p-12 text-white">
              <h3 className="text-3xl md:text-4xl mb-4">
                Нужна помощь?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Наша команда всегда готова помочь вам найти нужную информацию
              </p>
              <Link to="/">
                <Button size="lg" variant="secondary" className="bg-white text-[#1167B1] hover:bg-gray-100">
                  Связаться с нами
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
