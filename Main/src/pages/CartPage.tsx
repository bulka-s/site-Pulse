import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Trash2, ArrowRight, Package } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function CartPage() {
  const { items, removeItem, totalPrice, itemCount } = useCart();
  const navigate = useNavigate();

  const packageLabels = {
    basic: 'Базовый',
    standard: 'Стандартный',
    premium: 'Премиум'
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <Header />
        <Navigation onContactClick={() => {}} />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center py-20">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gray-100 flex items-center justify-center">
                <ShoppingCart className="w-16 h-16 text-gray-400" />
              </div>
              <h1 className="text-4xl mb-4">Корзина пуста</h1>
              <p className="text-xl text-gray-600 mb-8">
                Добавьте услуги из каталога, чтобы начать оформление заказа
              </p>
              <Link to="/catalog">
                <Button size="lg" className="bg-[#1167B1] hover:bg-blue-700">
                  Перейти в каталог
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <Navigation onContactClick={() => {}} />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#1167B1] to-blue-600 bg-clip-text text-transparent font-bold">
              Корзина услуг
            </h1>
            <p className="text-xl text-gray-600">
              У вас в корзине {itemCount} {itemCount === 1 ? 'услуга' : 'услуг'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-[#1167B1] to-blue-600 flex items-center justify-center flex-shrink-0">
                      <Package className="w-10 h-10 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl mb-1">{item.name}</h3>
                          <div className="text-sm text-gray-500">{item.category}</div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="w-5 h-5" />
                        </Button>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                        <div className="px-3 py-1 bg-[#1167B1]/10 text-[#1167B1] rounded-full">
                          {packageLabels[item.package]} пакет
                        </div>
                        <div>⏱ {item.duration}</div>
                      </div>
                      
                      <div className="text-2xl text-[#1167B1]">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl p-6 shadow-xl sticky top-24">
                <h2 className="text-2xl mb-6">Итого</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Количество услуг:</span>
                    <span className="font-medium">{itemCount}</span>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-baseline mb-2">
                      <span className="text-lg">Общая стоимость:</span>
                      <span className="text-3xl text-[#1167B1]">
                        {totalPrice.toLocaleString('ru-RU')} ₽
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      * Финальная стоимость может измениться после консультации
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => navigate('/checkout')}
                  size="lg"
                  className="w-full bg-[#1167B1] hover:bg-blue-700 mb-3"
                >
                  Перейти к оформлению
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <Link to="/catalog">
                  <Button variant="outline" size="lg" className="w-full">
                    Продолжить выбор
                  </Button>
                </Link>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium mb-2">📞 Нужна консультация?</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Свяжитесь с нами, и мы поможем выбрать оптимальное решение
                  </p>
                  <Link to="/">
                    <Button variant="link" className="p-0 h-auto text-[#1167B1]">
                      Связаться с нами →
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
