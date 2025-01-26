import ProductCard from './components/productCard'

function App() {
  return (

    <div className="min-h-screen bg-gradient-to-b from-cyan-300 to-blue-700 text-center">
      {/* Header */}
      <header className="py-8">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/9/9c/Coat_of_arms_of_Negombo_Municipal_Council.png" 
          alt="Matara Municipal Council Logo" 
          className="mx-auto w-24"
        />
        <h1 className="text-4xl font-bold text-black mt-4">
          මාතර මහා නගර සභාව<br /> Matara Municipal Council
        </h1>
        <h2 className="text-2xl font-semibold text-white">
          Online Services Portal
        </h2>
      </header>

      {/* Grid of Service Cards */}
      <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
        
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`p-6 rounded-xl shadow-lg text-white text-center ${service.bgColor} hover:scale-105 transition-transform`}
          >
            <div className="text-5xl">{service.icon}</div>
            <h3 className="text-2xl font-semibold mt-4">{service.title}</h3>
            <p className="mt-2 opacity-80">{service.description}</p>
          </div>
        ))}

      </div>
    </div>
  );
}

// Services Data
const services = [
  {
    title: "වරිපනම්",
    description: "අන්තර්ජාල ගෙවීම්",
    icon: "💲",
    bgColor: "bg-purple-500"
  },
  {
    title: "ඇවිදින මංතීරු",
    description: "අන්තර්ජාල ගෙවීම්",
    icon: "🛣️",
    bgColor: "bg-red-800"
  },
  {
    title: "බිම් කට්ටි සැළසුම් අනුමත කිරීම",
    description: "ඉල්ලුම් කිරීම හා ගෙවීම්",
    icon: "📖",
    bgColor: "bg-yellow-500"
  },
  {
    title: "ගලි බව්සර්",
    description: "ඉල්ලුම් කිරීම හා ගෙවීම්",
    icon: "🗑️",
    bgColor: "bg-orange-700"
  },
  {
    title: "නව වරිපනම් අංක/නව",
    description: "තක්සේරු ලබා ගැනීමේ සේවාව",
    icon: "🏷️",
    bgColor: "bg-purple-300"
  },
  {
    title: "ජල බව්සර්",
    description: "ඉල්ලුම් කිරීම හා ගෙවීම්",
    icon: "💧",
    bgColor: "bg-blue-800"
  },
  {
    title: "වරිපනම් සහතික",
    description: "ඉල්ලුම් කිරීම හා ගෙවීම්",
    icon: "☀️",
    bgColor: "bg-purple-700"
  },
  {
    title: "ඔප්පු සාරාංශ පත‍්‍රය",
    description: "අයදුම් කිරීම හා ලබා ගැනීම",
    icon: "📄",
    bgColor: "bg-orange-600"
  },
  {
    title: "උයන්වත්ත ක්‍රීඩා පිටිය",
    description: "අයදුම් කිරීම හා ගෙවීම්",
    icon: "📑",
    bgColor: "bg-green-500"
  },
  {
    title: "වීථිරේඛා සහතිකය",
    description: "ඉල්ලුම් කිරීම හා ගෙවීම්",
    icon: "📜",
    bgColor: "bg-yellow-700"
  },
  {
    title: "ප්‍රසම්පාදන සේවා",
    description: "ඉල්ලුම් කිරීම හා ගෙවීම්",
    icon: "🛒",
    bgColor: "bg-green-700"
  },
  {
    title: "කඩ කුලි",
    description: "අන්තර්ජාල ගෙවීම්",
    icon: "🏢",
    bgColor: "bg-red-600"
  }
];

export default App;
