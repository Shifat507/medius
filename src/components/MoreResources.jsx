import { FaFileAlt, FaChartLine, FaCalculator } from "react-icons/fa";

const MoreResources = () => {
  const resources = [
    {
      icon: <FaFileAlt className="text-green-700 text-2xl" />,
      title: "Get pre-approved to see how much you can borrow",
      linkText: "Get started →",
      link: "#",
      description: "Won’t impact your credit",
    },
    {
      icon: <FaChartLine className="text-green-700 text-2xl" />,
      title: "See today’s rates in your area",
      linkText: "See rates →",
      link: "#",
      description: "",
    },
    {
      icon: <FaCalculator className="text-green-700 text-2xl" />,
      title: "Find out your max homebuying budget",
      linkText: "Try our mortgage calculator →",
      link: "#",
      description: "",
    },
  ];

  return (
    <section className="py-10 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
            >
              <div className="mb-4">{resource.icon}</div>
              <h3 className="text-lg font-medium">{resource.title}</h3>
              <a
                href={resource.link}
                className="text-green-700 font-semibold mt-2 inline-block"
              >
                {resource.linkText}
              </a>
              {resource.description && (
                <p className="text-sm text-gray-500 mt-1">
                  {resource.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MoreResources;
