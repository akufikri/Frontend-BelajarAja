import { Avatar, TextInput, Label, Textarea, Button } from 'flowbite-react';

const SidebarMenuItem = ({ icon, text }) => (
      <li>
            <a href="/" className="flex items-center space-x-5 hover:bg-gray-100 p-2 rounded-2xl px-5">
                  {icon}
                  <div className="text-gray-700 font-medium mt-1">{text}</div>
            </a>
      </li>
);

const Dashboard = () => {
      const userIcon = <i className="fa-light fa-user"></i>;
      const lockIcon = <i className="fa-light fa-lock"></i>;

      return (
            <div className="pt-20 h-screen px-5">
                  <div className="max-w-7xl mx-auto">
                        <div className="mb-5 mt-10">
                              <h1 className="text-3xl mb-2 text-gray-800 font-medium">Pengaturan pengguna</h1>
                              <span className="text-sm text-gray-500">Ubah pengaturan profil dan akun Anda</span>
                        </div>
                        <div className="h-[60vh] bg-gray-50 rounded-lg shadow w-full">
                              <div className="border-r h-full max-w-xs p-4">
                                    <ul className="space-y-3">
                                          <SidebarMenuItem icon={userIcon} text="Account" />
                                          <SidebarMenuItem icon={lockIcon} text="Password" />
                                    </ul>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Dashboard;
