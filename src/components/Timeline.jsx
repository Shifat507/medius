import Link from "next/link";
import React from "react";

const timelineData = [
  {
    year: "2014",
    description:
      "After Vishal Garg’s first attempt to purchase a home fell through, he realized that the traditional mortgage process needed innovation. He founded Better.com to make home financing simpler, faster, and more accessible.",
  },
  {
    year: "2015",
    description:
      "Better Mortgage launches its first mortgage product, enabling online home loans in a single-click model.",
  },
  {
    year: "2016",
    description:
      "Better Mortgage becomes a Fannie Mae-approved seller/servicer, forming relationships with key industry partners.",
  },
  {
    year: "2017",
    description:
      "Better expands into the real estate market with the Better Real Estate network.",
  },
  {
    year: "2018",
    description:
      "Better Mortgage partners with Ally Bank to build Ally-powered by Better.",
  },
  {
    year: "2019",
    description:
      "Better Mortgage launches a mobile-first mortgage experience, bringing home financing to your fingertips.",
  },
  {
    year: "2021",
    description:
      "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
  },
  {
    year: "2022",
    description:
      "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
  },
  {
    year: "2023",
    description:
      "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
  },
  {
    year: "2022",
    description:
      "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
  },
  {
    year: "Today",
    description:
      "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
  },
];

const Timeline = () => {
  return (
    <div className="flex flex-col items-center py-12">
      <h2 className="text-3xl font-semibold text-gray-800 mb-8">Company Timeline</h2>
      <div className="relative border-l-4 border-gray-400">
        {
          timelineData.map((item, index) => (
            <div key={index} className="mb-10 md:ml-6">
              {/* Year Badge */}
              <div className="md:absolute md:-left-6 flex items-center justify-center bg-green-700 text-white font-semibold rounded-3xl px-4 py-1">
                {item.year}
              </div>
              {/* Timeline Content */}
              <div className="p-2 md:p-6 bg-gray-200 rounded-lg shadow-lg w-80">
                <p className="text-gray-600 mb-2">{item.description}</p>
                {
                  item.year === 'Today' ? <>
                  <Link href="/start" className="bg-green-700 text-white hover:bg-green-900 cursor-pointer px-4 py-2 rounded-lg">Get Start</Link>
                  </> : ''
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Timeline;
