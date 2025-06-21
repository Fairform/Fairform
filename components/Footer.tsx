export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-20 py-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="text-sm">
          © 2025 FAIRFORM Pty Ltd
        </div>
        <div className="flex gap-6 mt-4 md:mt-0 text-sm">
          <a href="#" className="hover:text-white transition">Privacy</a>
          <a href="#" className="hover:text-white transition">Security</a>
          <a href="#" className="hover:text-white transition">Terms</a>
        </div>
      </div>
    </footer>
  );
}
