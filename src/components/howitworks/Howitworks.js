import React from 'react';


const posts = [
  {
    title: ' Get Paid to Do Your Own Research',
    description:
      'VINE helps you as a contributor build wealth from the research you are already doing.  First, you will select a startup you want to research. Then, read our DYOR template to understand the information needed  and how to cite information. Lastly, we will generate a report and share the results with the VINE community. When your research gets upvoted by the community then it will be included into the due diligence memo. You, as a research contributor, will get an investment in the company without having to invest any of your own money.',
    imageUrl:'https://images.unsplash.com/photo-1531482615713-2afd69097998'  },
  {
    title: 'Invest your Spare Change ... Automatically',
    description:
      'Grow your VINE and invest your spare change into startups without thinking about it. VINE enables you to roundup the spare change from everyday purchases and have it automatically invest into a diversified crypto portfolio. Our diversification strategy, similar to ETF’s, spreads your nest egg among many companies. We create blended funds with investments in blue chip blockchain companies and the hottest startups. Now, you can easily invest in a smart portfolio built by experts.',
    imageUrl:
      'https://images.unsplash.com/photo-1605902711622-cfb43c4437b5',

  },
]

function Howitworks() {
  return (
    <div className="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-black h-1/3 sm:h-2/3" />
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-green-700 sm:text-4xl">What if  <span className= "text-white"> Wall Street Bets</span>  met  <span className= "text-white">Acorns Investing</span> in Web3?</h2>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-20 lg:grid-cols-2 lg:max-w-none">
          {posts.map((post) => (
            <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden ">
              <div className="flex-shrink-0">
                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
              </div>
              <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <a href={post.href} className="block mt-2">
                    <p className="text-xl font-bold text-green-700">{post.title}</p>
                    <p className="mt-3 text-base text-gray-500">{post.description}</p>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}







export default Howitworks;
