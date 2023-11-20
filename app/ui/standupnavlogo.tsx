import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from './font'

export default function StandUpNavLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <p className="text-[44px] pb-5">Stand Up</p>
      <GlobeAltIcon className="h-20 w-20 pl-2 rotate-[15deg]" />
    </div>
  );
}
