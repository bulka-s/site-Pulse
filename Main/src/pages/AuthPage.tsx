import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Checkbox } from '../components/ui/checkbox';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { toast } from 'sonner';
import { LogIn, UserPlus, Mail, Lock, User } from 'lucide-react';

export default function AuthPage() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false,
  });
  const [resetEmail, setResetEmail] = useState('');
  const [showReset, setShowReset] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginData.email || !loginData.password) {
      toast.error('Заполните все поля');
      return;
    }
    toast.success('Вход выполнен успешно!');
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerData.fullName || !registerData.email || !registerData.password) {
      toast.error('Заполните все обязательные поля');
      return;
    }
    if (registerData.password !== registerData.confirmPassword) {
      toast.error('Пароли не совпадают');
      return;
    }
    if (!registerData.agreeToTerms) {
      toast.error('Необходимо согласиться с политикой конфиденциальности');
      return;
    }
    toast.success('Регистрация успешна! Проверьте email для подтверждения.');
  };

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      toast.error('Введите email');
      return;
    }
    toast.success('Письмо с инструкциями отправлено на ваш email');
    setShowReset(false);
  };

  if (showReset) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
        <Header />
        <Navigation onContactClick={() => {}} />
        
        <main className="pt-32 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-md mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#1167B1]/10 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-[#1167B1]" />
                  </div>
                  <h1 className="text-3xl mb-2">Восстановление пароля</h1>
                  <p className="text-gray-600">
                    Введите email для восстановления доступа
                  </p>
                </div>

                <form onSubmit={handleReset} className="space-y-4">
                  <div>
                    <Label htmlFor="reset-email">Email</Label>
                    <Input
                      id="reset-email"
                      type="email"
                      value={resetEmail}
                      onChange={(e) => setResetEmail(e.target.value)}
                      placeholder="example@mail.ru"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-[#1167B1] hover:bg-blue-700">
                    Отправить инструкции
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full"
                    onClick={() => setShowReset(false)}
                  >
                    Вернуться к входу
                  </Button>
                </form>
              </div>
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
          <div className="max-w-md mx-auto">
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" className="flex items-center gap-2">
                  <LogIn className="w-4 h-4" />
                  Вход
                </TabsTrigger>
                <TabsTrigger value="register" className="flex items-center gap-2">
                  <UserPlus className="w-4 h-4" />
                  Регистрация
                </TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl mb-2">Вход в личный кабинет</h2>
                    <p className="text-gray-600">
                      Войдите, чтобы управлять своими заказами
                    </p>
                  </div>

                  <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                      <Label htmlFor="login-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="login-email"
                          type="email"
                          value={loginData.email}
                          onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                          placeholder="example@mail.ru"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="login-password">Пароль</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="login-password"
                          type="password"
                          value={loginData.password}
                          onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                          placeholder="••••••••"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => setShowReset(true)}
                        className="text-sm text-[#1167B1] hover:underline"
                      >
                        Забыли пароль?
                      </button>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#1167B1] hover:bg-blue-700">
                      <LogIn className="w-5 h-5 mr-2" />
                      Войти
                    </Button>
                  </form>
                </div>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <div className="bg-white rounded-2xl p-8 shadow-xl">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl mb-2">Регистрация</h2>
                    <p className="text-gray-600">
                      Создайте аккаунт для управления заказами
                    </p>
                  </div>

                  <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                      <Label htmlFor="register-name">ФИО</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="register-name"
                          type="text"
                          value={registerData.fullName}
                          onChange={(e) => setRegisterData({ ...registerData, fullName: e.target.value })}
                          placeholder="Иванов Иван Иванович"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="register-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="register-email"
                          type="email"
                          value={registerData.email}
                          onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                          placeholder="example@mail.ru"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="register-password">Пароль</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="register-password"
                          type="password"
                          value={registerData.password}
                          onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                          placeholder="••••••••"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="register-confirm-password">Подтверждение пароля</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          id="register-confirm-password"
                          type="password"
                          value={registerData.confirmPassword}
                          onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                          placeholder="••••••••"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3 pt-2">
                      <Checkbox
                        id="terms"
                        checked={registerData.agreeToTerms}
                        onCheckedChange={(checked) => 
                          setRegisterData({ ...registerData, agreeToTerms: checked as boolean })
                        }
                      />
                      <Label htmlFor="terms" className="cursor-pointer font-normal text-sm">
                        Я согласен с политикой конфиденциальности
                      </Label>
                    </div>

                    <Button type="submit" size="lg" className="w-full bg-[#1167B1] hover:bg-blue-700">
                      <UserPlus className="w-5 h-5 mr-2" />
                      Зарегистрироваться
                    </Button>
                  </form>
                </div>
              </TabsContent>
            </Tabs>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <Link to="/" className="text-[#1167B1] hover:underline">
                ← Вернуться на главную
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
