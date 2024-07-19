export default function Service() {
  const services = [
    {
      service: 'Refrigeration',
      description: 'Specializing in commercial and residential preventative maintenance, troubleshooting, and repairs. Customizable maintenance programs available',
      backgroundImage: 'images/fridges.jpeg'
    },
    {
      service: 'Piping & Insulation',
      description: 'We offer various commercial piping and insulation services to fit your needs. If you have a new system in need of piping or an existing system in need of relocation we can help.',
      backgroundImage: 'images/vents.jpg' 
    },
    // {
    //   service: 'Insulation',
    //   description: 'We can offer service for both the piping and insulation of your systems.',
    //   backgroundImage: 'images/insulation.jpeg'
    // },
    {
      service: 'Restaurant Equipment',
      description: 'We can help prevent downtime and keep your equipment up and running. We can help with grills, fryers, pizza ovens, steam tables, etc.',
      backgroundImage: 'images/gas-burners.jpg' 
    },
  ];

  return (
    <div className="flex flex-col items-center gap-16">
      {services.map((service, index) => (
        <div
          key={index}
          className="service-container relative flex items-center justify-center w-full md:w-3/4 lg:w-2/3 p-4"
          style={{
            borderRadius: '10px',
            overflow: 'hidden',
            minHeight: '200px',
            background: `url(${service.backgroundImage}) center center / cover no-repeat`
          }}
        >
          <div className="relative z-10 p-4 bg-opacity-50 bg-black text-white w-full">
            <h3 className="text-xl font-semibold mb-2">{service.service}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
