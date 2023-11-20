import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from './font'

export default function StandUpLogo() {
  return (
    <div className={`${lusitana.className} flex flex-row items-center leading-none text-white`}>
      <GlobeAltIcon className="h-12 w-12 pr-2 rotate-[15deg]" />
      <p className="text-[44px]">Stand Up</p>
    </div>
  );
}
