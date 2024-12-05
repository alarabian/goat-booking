import BusTicketDetail from "@/components/bus-ticket-detail/BusTicketDetail"
import PageCover from "@/components/common/cover/PageCover"

const page = () => {
  return (
    <>
      <PageCover title="Confirm Bus Ticket Booking Details" />
      <BusTicketDetail />
    </>
  )
}

export default page