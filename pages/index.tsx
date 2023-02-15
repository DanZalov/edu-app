import MainLayout from '../components/MainLayout'

export default function Home() {
  return (
    <MainLayout title="Main Page">
      <div className="text-center h-[461px] bg-iraGrey rounded-md">
        <h1 className="text-2xl leading-[461px]">
          Привет! Приложение в разработке, кликни на "ТЕСТЫ"
        </h1>
      </div>
    </MainLayout>
  )
}
