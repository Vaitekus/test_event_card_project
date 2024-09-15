import Button from "../common/Button/Button";
import Badge from "../common/Badge/Badge";

const borderColors = {
    default: 'border-cyan-700',
    popular: 'border-accent',
}

const titleTextColors = {
    default: 'text-cyan-700',
    popular: 'text-accent',
}

const buttonTypes = {
    default: 'default',
    popular: 'primary',
}

const EventCard = (event) => {
    const {type, badgeText, title, tourName, weekday, day, month, year, time, venue, city, country} = event.event;
    let borderColorsClasses = borderColors[type];
    let titleTextColorClasses = titleTextColors[type];
    let buttonType = buttonTypes[type];
    const  cardSpace = badgeText ? 'pt-5' : '';
    
    return (
        <section className={`group relative rounded border-2 bg-white p-4 mb-3 last:mb-0 
                  ${borderColorsClasses} ${cardSpace}`}>
            <Badge text={badgeText} type={type}>
                {/*Temporary usage*/}
                <span className="icon-hot text-sm pr-1"></span>
            </Badge>
            <h2 className={`font-bold text-2xl leading-6 uppercase ${titleTextColorClasses}`}>{title}</h2>
            <p className="text-sm font-bold">{tourName}</p>
            <div className="sm:grid sm:grid-cols-2 pt-3 sm:divide-x mb-3">
                <div className="leading-14 uppercase mb-1 sm:mb-0">
                    <p className="mb-1">{weekday}</p>
                    <time dateTime="" className="grid grid-rows-2 items-center grid-cols-[auto_minmax(900px,_1fr)]">
                        <span className="col-span-1 row-span-2 text-[40px] leading-[30px]">{day}</span>
                        <span className="font-bold">{month}</span>
                        <span>{year}</span>
                    </time>
                </div>
                <div className="*:text-sm *:leading-17 sm:pl-3">
                    <time dateTime="">{time} uur</time>
                    <p>{venue}</p>
                    <p>{city}, {country}</p>
                </div>
            </div>
            <Button text="Bekijk Tickets" type={buttonType} size="lg" width="stretch">
                <span className="icon-ticket text-[40px] pr-1"></span>
            </Button>
        </section> 
    )
}

export default EventCard;