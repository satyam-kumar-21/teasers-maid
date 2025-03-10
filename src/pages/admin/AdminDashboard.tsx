import { Adminsidenav } from "./Adminsidenav";


function AdminDashboard() {
  return (
    <div className="flex">
      <Adminsidenav />
      <div className="ml-64 p-4 w-full">
        {/* Admin dashboard content here */}
      </div>
    </div>
  );
}

export default AdminDashboard;
