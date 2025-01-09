/* eslint-disable @next/next/no-img-element */
const SelectedWorks = () => {
    const works = [
        {
            name: 'Councelopedia',
            image: '/selectedWorks/councelopedia.png',
            desc: 'Digital tool for young migrants in Germany',
            role: 'Product Design'
        },
        {
            name: 'UNILaundry',
            image: '/selectedWorks/unilaundry.png',
            desc: 'Student Dormitory Laundry Companion',
            role: 'Product Design'
        },
        {
            name: 'ScruberJay',
            image: '/selectedWorks/solarImpression.png',
            desc: 'Household Food waste management application',
            role: 'Product Design'
        },
        {
            name: 'Solar Impressions',
            image: '/selectedWorks/silence.png',
            desc: 'Energy Harvesting & Data Visualisation',
            role: 'Media Art'
        }
    ]
    return (
        <div className="px-12 flex z-50 flex-col">
            <h1 className="text-[3.75vw] font-normal text-[--black] mb-2">Selected Works</h1>
            <p className="text-[1.3vw] font-normal w-[35%] mb-20 font-regular-18">
                To view all works, head over to
                <span className="highlight"> projects page</span>
            </p>

            <div className="works-grid">
                {works.map((work, i) => (
                    <div key={i} className="work-card">
                        <div className="w-full max-h-[476px] mb-4 overflow-hidden rounded-2xl">
                            <img className="w-full h-full object-cover" src={work.image} alt={work.name} />
                        </div>
                        <div className="flex justify-between mt-8">
                            <h2 className="font-medium-24 text-3xl font-medium text-[--black]">{work.name}</h2>
                            <p className="font-regular-18 font-normal text-[--black]">
                                {work.desc}
                            </p>
                            <span className="font-regular-18 font-normal text-2xl text-[--primary-gray] text-end">{work.role}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default SelectedWorks