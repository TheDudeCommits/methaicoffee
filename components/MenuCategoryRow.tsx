import MenuCategoryCard from "./MenuCategoryCard";

interface Category {
  id: string;
  name: string;
  itemCount: number;
  image?: string;
}

interface MenuCategoryRowProps {
  categories: Category[];
}

export default function MenuCategoryRow({ categories }: MenuCategoryRowProps) {
  return (
    <section className="py-12 md:py-16" aria-labelledby="categories-heading">
      <h2 id="categories-heading" className="sr-only">
        Menu Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => (
          <MenuCategoryCard
            key={category.id}
            id={category.id}
            name={category.name}
            itemCount={category.itemCount}
            image={category.image}
            href={`#${category.id}`}
          />
        ))}
      </div>
    </section>
  );
}

