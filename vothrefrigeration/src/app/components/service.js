export default function Service() {
  const services = [
    {
      service: 'Refrigeration',
      description: 'Specializing in commercial and residential providing preventative maintenance, troubleshooting, and repairs. We can create a plan to suit your needs if you are interested in a long-term maintenance program.',
    },
    {
      service: 'Piping',
      description: 'We offer various commercial piping services to fit your needs. If you have a new system in need of piping or an existing system in need of relocating we can help.',
    },
    {
      service: 'Insulation',
      description: 'We can offer service for both the piping and insulation of your systems.',
    },
    {
      service: 'Restaurant Equipment',
      description: 'We can be in service to prevent downtime and keep your equipment up and running. We can help with grills, fryers, pizza ovens, steam tables, etc.',
    },
  ];

  return (
    <div className="flex flex-col gap-16">
      {services.map((service, index) => (
        <div key={index} className="">
          <div className="border-gradient h-1 my-4"></div>
          {/* <div className={`${index % 2 === 0 ? 'lg:text-left' : 'lg:text-right'} `}> */}
          <div className="lg:text-left">
            <h3 className="text-xl font-semibold mb-2">{service.service}</h3>
            <p className="text-lg">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
