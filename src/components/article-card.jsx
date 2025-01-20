function ArticleCard({ category, title, description, imageUrl }) {
    return (
      <article className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 hover:scale-105">
        <img
          src={imageUrl}
          alt={title}
          className="w-full lg:h-64 object-cover"
        />
        <div className="p-6 flex flex-col gap-4">
          <div className="text-sm font-medium text-gray-600 uppercase tracking-wider">
            {category}
          </div>
          <h2 className="text-2xl font-bold text-[#7D328D]">
            {title}
          </h2>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
          <a
            href="#"
            className="text-[#7D328D] font-semibold hover:text-[#9D52AD] transition-colors"
          >
            Read More
          </a>
        </div>
      </article>
    );
  }
  
  export default function Article() {
    const articles = [
      {
        category: "GROWING UP",
        title: "Puberty",
        description:
          "Puberty is a key stage in the transition from childhood to adulthood. During puberty, your body goes through lots of changes, which happens between ages 10 and 14 for girls.",
        imageUrl:
          "Img/product_img.jpg",
      },
      {
        category: "EVERYTHING PERIODS",
        title: "Menstrual Cycle Stages & More",
        description:
          "There are four phases within menstrual cycle and can last between 24 to 38 days. Let's get to know the way each phase can affect you with Stayfree® India.",
        imageUrl:
          "Img/product_img.jpg",
      },
      {
        category: "GROWING UP",
        title: "Having the period conversation with your daughter",
        description:
          "Talk to your daughter that getting a period is normal and healthy. Here are some tips for talking to your daughter about menstruation cycle to break society stigma around period.",
        imageUrl:
          "Img/product_img.jpg",
      },
    ];
  
    return (
      <div className="min-h-screen bg-[#090014] py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="flex justify-end items-center mb-12">
            <a
              href="#"
              className="px-4 py-2 text-[#7D328D] border-2 border-[#7D328D] rounded-full hover:bg-[#9D52AD] hover:text-white transition-colors"
            >
              All Blogs
            </a>
          </header>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <ArticleCard key={index} {...article} />
            ))}
          </div>
        </div>
      </div>
    );
  }
  