import CartMiniIcon from "./CartMiniIcon";

const Header = () => {
  

  return (
    <header className="bg-orange-300 p-8">
      <div className="relative container mx-auto flex justify-between items-center">
        <h2 className="uppercase font-semibold text-xl">Restaurant</h2>
        <CartMiniIcon />
        
      </div>
    </header>
  );
};

export default Header;
