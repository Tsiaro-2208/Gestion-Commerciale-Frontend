import TierHeader from '@/components/tiers/header'
import TierList from '@/components/tiers/list'
import { TierType } from '@/lib/services/tier.service'

const ClientsPage = () => {
    return (
        <div className='w-full'>
            <TierHeader type={TierType.CLIENT} />
            <TierList type={TierType.CLIENT} />
        </div>
    )
}

export default ClientsPage