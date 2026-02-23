import { useResource } from "./use-resource";
import { Tier, TierService } from "@/lib/services/tier.service";


export const useTiers = () =>
    useResource<Tier>({
        queryKey: "tiers",
        service: new TierService(),
    })