import { SafeListing, SafeUser } from "@/app/types";
import { Reservation } from "@prisma/client";

type Props = {
  reservations?: Reservation[];
  listing: SafeListing & {
    user: SafeUser;
  };
  currentUser?: SafeUser | null;
};

const ListingClient: React.FC<Props> = ({ listing, currentUser }: Props) => {
  return <div>ListingClient</div>;
};

export default ListingClient;
