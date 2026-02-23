import TierHeader from '@/components/tiers/header'
import TierList from '@/components/tiers/list'
import { TierType } from '@/lib/services/tier.service'

const FournisseursPage = () => {
    return (
        <div className='w-full'>
            <TierHeader type={TierType.FOURNISSEUR} />
            <TierList type={TierType.FOURNISSEUR} />
        </div>
    )
}

export default FournisseursPage