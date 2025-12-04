import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { services, categories } from '../data/services.ts';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';

export default function CatalogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showOnlyPopular, setShowOnlyPopular] = useState(false);

  const filteredServices = services.filter((service) => {
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesPopular = !showOnlyPopular || service.popular;

    return matchesSearch && matchesCategory && matchesPopular;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <Header />
      <Navigation onContactClick={() => { }} />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero */}
          <div className="mb-12 text-center">
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-[#1167B1] to-blue-600 bg-clip-text text-transparent font-bold">
              Каталог услуг
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Полный спектр маркетинговых решений для вашего бизнеса. Выберите нужную услугу или воспользуйтесь фильтрами для быстрого поиска.
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
            <div className="flex items-center gap-2 mb-6">
              <SlidersHorizontal className="w-5 h-5 text-[#1167B1]" />
              <h2 className="text-xl">Фильтры и поиск</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Search */}
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Введите название услуги..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Category Select */}
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Все категории" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Все категории</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat.id} value={cat.id}>
                      {cat.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Checkboxes */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="popular"
                  checked={showOnlyPopular}
                  onCheckedChange={(checked) => setShowOnlyPopular(checked as boolean)}
                />
                <label htmlFor="popular" className="text-sm cursor-pointer">
                  Только популярные
                </label>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/catalog/${category.id}`}
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1167B1] to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="w-6 h-6 bg-white rounded" />
                </div>
                <h3 className="text-lg mb-2 text-gray-900">{category.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2">{category.description}</p>
              </Link>
            ))}
          </div>

          {/* Services Grid */}
          <div className="mb-8">
            <h2 className="text-3xl mb-8">
              Все услуги
              <span className="text-gray-400 text-xl ml-3">({filteredServices.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
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
                  <div className="text-sm text-[#1167B1] mb-2">{service.categoryName}</div>
                  <h3 className="text-xl mb-3 group-hover:text-[#1167B1] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{service.shortDescription}</p>

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

          {filteredServices.length === 0 && (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gray-100 flex items-center justify-center">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-2xl mb-2">Услуги не найдены</h3>
              <p className="text-gray-600">Попробуйте изменить параметры поиска или фильтры</p>
            </div>
          )}

          {/* CTA Block */}
          <div className="mt-16 bg-gradient-to-r from-[#1167B1] to-blue-600 rounded-2xl p-12 text-center text-white">
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
