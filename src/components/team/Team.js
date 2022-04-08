import likebite from '../../assets/images/likebite.png'


const people = [
    {
      name: 'Jazmin',
      role: 'Haircare Junkie',
      imageUrl: 'https://lh3.googleusercontent.com/RnMACCZ16ZzUFndz_oMJsb_-N3y93wDqUV-h97DVAwLoW5Qu04mg1WZfwjkLj2RTRIWqWmRhuJ8gzYBxIkMQ-AjIiVG0eHMZGMJIog=s0',
    },
    {
        name: 'Sandra',
        role: 'Makeup Junkie',
        imageUrl: 'https://lh3.googleusercontent.com/RnMACCZ16ZzUFndz_oMJsb_-N3y93wDqUV-h97DVAwLoW5Qu04mg1WZfwjkLj2RTRIWqWmRhuJ8gzYBxIkMQ-AjIiVG0eHMZGMJIog=s0' ,
      },
      {
        name: 'XYZ1',
        role: 'Bodycare Junkie',
        imageUrl: 'https://lh3.googleusercontent.com/RnMACCZ16ZzUFndz_oMJsb_-N3y93wDqUV-h97DVAwLoW5Qu04mg1WZfwjkLj2RTRIWqWmRhuJ8gzYBxIkMQ-AjIiVG0eHMZGMJIog=s0',
      },
      {
        name: 'XYZ2',
        role: 'Lipstick Junkie',
        imageUrl: 'https://lh3.googleusercontent.com/RnMACCZ16ZzUFndz_oMJsb_-N3y93wDqUV-h97DVAwLoW5Qu04mg1WZfwjkLj2RTRIWqWmRhuJ8gzYBxIkMQ-AjIiVG0eHMZGMJIog=s0',
      },
      {
        name: 'XYZ3',
        role: 'Eyeshadow Junkie',
        imageUrl:
          'https://lh3.googleusercontent.com/RnMACCZ16ZzUFndz_oMJsb_-N3y93wDqUV-h97DVAwLoW5Qu04mg1WZfwjkLj2RTRIWqWmRhuJ8gzYBxIkMQ-AjIiVG0eHMZGMJIog=s0',
      },
      {
        name: 'Mark',
        role: 'Skincare Junkie',
        imageUrl:
          'https://lh3.googleusercontent.com/RnMACCZ16ZzUFndz_oMJsb_-N3y93wDqUV-h97DVAwLoW5Qu04mg1WZfwjkLj2RTRIWqWmRhuJ8gzYBxIkMQ-AjIiVG0eHMZGMJIog=s0',
      },
  ]
  
  export default function Team() {
    return (
      <div>
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12">
            <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
              <h2 className="text-3xl font-extrabold text-white tracking-tight sm:text-4xl">Meet the Beauty Junkies</h2>
              <p className="text-xl text-gray-300">
                Ornare sagittis, suspendisse in hendrerit quis. Sed dui aliquet lectus sit pretium egestas vel mattis
                neque.
              </p>
            </div>
            <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
              {people.map((person) => (
                <li key={person.name} className="py-10 px-6 bg-gray-800 text-center rounded-lg xl:px-10 xl:text-center">
                  <div className="space-y-6 xl:space-y-10">
                    <img className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src={person.imageUrl} alt="" />
                    <div>
                      <div className="font-medium text-lg leading-6 space-y-1 text-center">
                        <h3 className="text-white text-center">{person.name}</h3>
                        <p className="text-indigo-400 text-center">{person.role}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }