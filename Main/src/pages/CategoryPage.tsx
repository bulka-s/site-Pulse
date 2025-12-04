import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { getServicesByCategory, getCategoryById } from '../data/services';
import { ArrowLeft, ArrowUpDown } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

type SortOption = 'popular' | 'price-asc' | 'price-desc' | 'duration';

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  
  const categoryInfo = getCategoryById(category || '');
  const allServices = getServicesByCategory(category || '');

  const sortedServices = [...allServices].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.packages.basic.price - b.packages.basic.price;
      case 'price-desc':
        return b.packages.basic.price - a.packages.basic.price;
      case 'popular':
        return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
      default:
        return 0;
    }
  });

  if (!categoryInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Категория не найдена</h2>
          <Link to="/catalog">
            <Button>Вернуться в каталог</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <Navigation onContactClick={() => {}} />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          <div className="mb-8">
            <Link to="/catalog" className="inline-flex items-center gap-2 text-[#1167B1] hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Назад в каталог
            </Link>
          </div>

          {/* Category Hero */}
          <div className="mb-12">
            <div className="inline-block px-4 py-2 bg-[#1167B1]/10 text-[#1167B1] rounded-full mb-4">
              {allServices.length} {allServices.length === 1 ? 'услуга' : 'услуг'}
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#1167B1] to-blue-600 bg-clip-text text-transparent font-bold">
              {categoryInfo.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              {categoryInfo.description}
            </p>
          </div>

          {/* Sort */}
          <div className="flex items-center justify-between mb-8 bg-white rounded-xl p-4 shadow-md">
            <div className="flex items-center gap-2 text-gray-600">
              <ArrowUpDown className="w-5 h-5" />
              <span>Сортировка:</span>
            </div>
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as SortOption)}>
              <SelectTrigger className="w-[200px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">По популярности</SelectItem>
                <SelectItem value="price-asc">По возрастанию цены</SelectItem>
                <SelectItem value="price-desc">По убыванию цены</SelectItem>
                <SelectItem value="duration">По сроку выполнения</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {sortedServices.map((service) => (
              <Link
                key={service.id}
                to={`/service/${service.id}`}
                className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-[#1167B1] via-blue-500 to-blue-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <div className="w-10 h-10 bg-white rounded-lg" />
                    </div>
                  </div>
                  {service.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm">
                      Популярное
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl mb-3 group-hover:text-[#1167B1] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.shortDescription}</p>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div>⏱ {service.duration}</div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <div className="text-sm text-gray-500">от</div>
                      <div className="text-2xl text-[#1167B1]">
                        {service.packages.basic.price.toLocaleString('ru-RU')} ₽
                      </div>
                    </div>
                    <Button className="bg-[#1167B1] hover:bg-blue-700">
                      Подробнее
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA Block */}
          <div className="bg-gradient-to-r from-[#1167B1] to-blue-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">
              Не нашли нужную услугу?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Мы разработаем индивидуальное решение под ваши задачи
            </p>
            <Link to="/">
              <Button size="lg" variant="secondary" className="bg-white text-[#1167B1] hover:bg-gray-100">
                Обсудить проект
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
