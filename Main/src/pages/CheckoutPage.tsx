import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
// import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Checkbox } from '../components/ui/checkbox';
import { Label } from '../components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Package } from 'lucide-react';
import { toast } from 'sonner';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    position: '',
    company: '',
    email: '',
    phone: '',
    messenger: 'telegram',
    comment: '',
    agreeToTerms: false,
    agreeToNewsletter: false,
  });

  const [orderSubmitted, setOrderSubmitted] = useState(false);

  const packageLabels = {
    basic: 'Базовый',
    standard: 'Стандартный',
    premium: 'Премиум'
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.agreeToTerms) {
      toast.error('Необходимо согласиться с условиями обработки персональных данных');
      return;
    }

    if (!formData.fullName || !formData.email || !formData.phone) {
      toast.error('Заполните все обязательные поля');
      return;
    }

    // Simulate order submission
    toast.success('Заказ успешно оформлен!');
    setOrderSubmitted(true);
    navigate('/thank-you');
    clearCart();
  };

  if (items.length === 0 && !orderSubmitted) {
    navigate('/cart');
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      {/* <Navigation onContactClick={() => {}} /> */}

      <main className="pb-20" style={{ paddingTop: "3rem" }}>
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl mb-4 bg-gradient-to-r from-[#1167B1] to-blue-600 bg-clip-text text-transparent font-bold">
              Оформление заказа
            </h1>
            <p className="text-xl text-gray-600">
              Заполните форму, и наш менеджер свяжется с вами для уточнения деталей
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="text-2xl mb-6">Данные покупателя</h2>

                <div className="space-y-6">
                  <div>
                    {/* <Label htmlFor="fullName">ФИО *</Label> */}
                    <Input
                      id="fullName"
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Иванов Иван Иванович"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      {/* <Label htmlFor="position">Должность</Label> */}
                      <Input
                        id="position"
                        type="text"
                        value={formData.position}
                        onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                        placeholder="Маркетолог"
                      />
                    </div>
                    <div>
                      {/* <Label htmlFor="company">Компания</Label> */}
                      <Input
                        id="company"
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="ООО Пример"
                      />
                    </div>
                  </div>

                  <h3 className="text-xl pt-4">Контакты</h3>

                  <div>
                    {/* <Label htmlFor="email">Email *</Label> */}
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.ru"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      {/* <Label htmlFor="phone">Телефон *</Label> */}
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Номер"
                        required
                      />
                    </div>
                    <div>
                      {/* <Label htmlFor="messenger">Мессенджер</Label> */}
                      <Select
                        value={formData.messenger}
                        onValueChange={(value) => setFormData({ ...formData, messenger: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="telegram">Telegram</SelectItem>
                          <SelectItem value="whatsapp">WhatsApp</SelectItem>
                          <SelectItem value="viber">Viber</SelectItem>
                          <SelectItem value="none">Не использую</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    {/* <Label htmlFor="comment">Комментарий к заказу</Label> */}
                    <Textarea
                      id="comment"
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      placeholder="Особые пожелания или требования"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4 pt-4 border-t">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, agreeToTerms: checked as boolean })
                        }
                      />
                      <Label htmlFor="terms" className="cursor-pointer font-normal">
                        Я согласен с условиями обработки персональных данных *
                      </Label>
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.agreeToNewsletter}
                        onCheckedChange={(checked) =>
                          setFormData({ ...formData, agreeToNewsletter: checked as boolean })
                        }
                      />
                      <Label htmlFor="newsletter" className="cursor-pointer font-normal">
                        Получать информационную рассылку
                      </Label>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#1167B1] hover:bg-blue-700"
                  >
                    Подтвердить заказ
                  </Button>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-6 shadow-xl sticky top-24">
                <h2 className="text-2xl mb-6">Ваш заказ</h2>

                <div className="space-y-4 mb-6 max-h-[400px] overflow-y-auto">
                  {items.map((item) => (
                    <div key={item.id} className="pb-4 border-b last:border-0">
                      <div className="flex gap-3 mb-2">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1167B1] to-blue-600 flex items-center justify-center flex-shrink-0">
                          <Package className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium mb-1">{item.name}</h4>
                          <div className="text-sm text-gray-500">
                            {packageLabels[item.package]} пакет
                          </div>
                        </div>
                      </div>
                      <div className="text-right text-lg text-[#1167B1]">
                        {item.price.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-baseline">
                    <span className="text-lg">Итого:</span>
                    <span className="text-3xl text-[#1167B1]">
                      {totalPrice.toLocaleString('ru-RU')} ₽
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    * Финальная стоимость может измениться после консультации с менеджером
                  </p>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-medium mb-2">Что дальше?</h4>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>✓ Менеджер свяжется с вами в течение 2 часов</li>
                    <li>✓ Обсудим детали проекта</li>
                    <li>✓ Согласуем сроки и стоимость</li>
                    <li>✓ Приступим к работе</li>
                  </ul>
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
