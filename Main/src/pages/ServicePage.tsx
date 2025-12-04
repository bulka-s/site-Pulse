import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getServiceById } from '../data/services';
import { ArrowLeft, Check, ShoppingCart, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';

export default function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [selectedPackage, setSelectedPackage] = useState<'basic' | 'standard' | 'premium'>('standard');
  
  const service = getServiceById(serviceId || '');

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Услуга не найдена</h2>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    const packageInfo = service.packages[selectedPackage];
    addItem({
      id: `${service.id}-${selectedPackage}-${Date.now()}`,
      name: service.name,
      price: packageInfo.price,
      package: selectedPackage,
      duration: service.duration,
      category: service.categoryName,
    });
    toast.success('Услуга добавлена в корзину!');
  };

  const handleOrderConsultation = () => {
    navigate('/', { state: { scrollToContact: true } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <Navigation onContactClick={() => {}} />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8 flex items-center gap-2 text-sm">
            <Link to="/catalog" className="text-[#1167B1] hover:underline">Каталог</Link>
            <span className="text-gray-400">/</span>
            <Link to={`/catalog/${service.category}`} className="text-[#1167B1] hover:underline">
              {service.categoryName}
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{service.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Hero */}
              <div className="mb-8">
                <div className="inline-block px-4 py-2 bg-[#1167B1]/10 text-[#1167B1] rounded-full mb-4">
                  {service.categoryName}
                </div>
                <h1 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-[#1167B1] to-blue-600 bg-clip-text text-transparent font-bold">
                  {service.name}
                </h1>
                <p className="text-xl text-gray-600">
                  {service.fullDescription}
                </p>
              </div>

              {/* What's Included */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl mb-6">Что входит в услугу</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.includes.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#1167B1]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-[#1167B1]" />
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stages */}
              <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
                <h2 className="text-2xl mb-6">Этапы работы</h2>
                <div className="space-y-4">
                  {service.stages.map((stage, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1167B1] to-blue-600 text-white flex items-center justify-center flex-shrink-0">
                        {index + 1}
                      </div>
                      <div className="pt-1.5">
                        <p className="text-gray-700">{stage}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl mb-6">Часто задаваемые вопросы</h2>
                <Accordion type="single" collapsible className="w-full">
                  {service.faq.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            {/* Sidebar - Packages */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-2xl p-6 shadow-xl">
                  <h3 className="text-xl mb-6">Выберите пакет</h3>
                  
                  <div className="space-y-4 mb-6">
                    {(['basic', 'standard', 'premium'] as const).map((pkg) => {
                      const packageInfo = service.packages[pkg];
                      const packageLabels = {
                        basic: 'Базовый',
                        standard: 'Стандартный',
                        premium: 'Премиум'
                      };
                      
                      return (
                        <div
                          key={pkg}
                          onClick={() => setSelectedPackage(pkg)}
                          className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                            selectedPackage === pkg
                              ? 'border-[#1167B1] bg-[#1167B1]/5'
                              : 'border-gray-200 hover:border-[#1167B1]/50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-medium">{packageLabels[pkg]}</h4>
                            <div className="text-right">
                              <div className="text-2xl text-[#1167B1]">
                                {packageInfo.price.toLocaleString('ru-RU')} ₽
                              </div>
                            </div>
                          </div>
                          <ul className="space-y-2">
                            {packageInfo.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                                <Check className="w-4 h-4 text-[#1167B1] flex-shrink-0 mt-0.5" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mb-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                      <span>Срок выполнения:</span>
                      <span className="font-medium">{service.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button
                      onClick={handleAddToCart}
                      className="w-full bg-[#1167B1] hover:bg-blue-700"
                      size="lg"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Добавить в корзину
                    </Button>
                    <Button
                      onClick={handleOrderConsultation}
                      variant="outline"
                      className="w-full border-[#1167B1] text-[#1167B1] hover:bg-[#1167B1]/5"
                      size="lg"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Заказать консультацию
                    </Button>
                  </div>
                </div>

                {/* Help Block */}
                <div className="mt-6 bg-gradient-to-br from-[#1167B1] to-blue-600 rounded-2xl p-6 text-white">
                  <h4 className="text-lg mb-2">Нужна помощь?</h4>
                  <p className="text-sm mb-4 opacity-90">
                    Наши специалисты помогут выбрать оптимальное решение для ваших задач
                  </p>
                  <Button
                    onClick={handleOrderConsultation}
                    variant="secondary"
                    className="w-full bg-white text-[#1167B1] hover:bg-gray-100"
                  >
                    Связаться с нами
                  </Button>
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
