import React from 'react';

const posts = [
  {
    title: "A LEVEL PLAYING FIELD",
    description:
    "Vine is a radical new approach to investing. Our community creates public due-diligence memo's, we publicly vote on the most backable projects, and everyone can earn investment carry in every startup. ",
  },
  {
    title: "CONTRIBUTOR REWARDS",
    description:
      "Vine's contributors are rewarded with a percentage of carry in the company based upon the weighted contributions across all contributors. Contributions include proposing, editing, annotating, discussing, and voting on whether edits should be added to the due diligence investment memo.",
  },
  {
    title: "OPEN SOURCE TECHNOLOGY",
    description:
      "Vine believes in a bottom up, decentralized, community. Join us if you that want to contribute to building tools that build wealth for the many.",
  },
];

function About() {
  return (
    <div id="About">
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative inset-0">
        <div className=" h-1/3 sm:h-2/3" />
      </div>
      <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-green-700 sm:text-4xl">VINE is an Ecosystem of Decentralized Knowledge.</h2>

        </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            >
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-semibold text-green-700">
                      {post.title}
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      {post.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default About;
