interface ButtonCreateProps {
  handleModal: () => void;
}

const ButtonCreate: React.FC<ButtonCreateProps> = ({ handleModal }) => {
  return (
    <div className="relative mx-8">
      <button
        onClick={handleModal}
        className="absolute top-0 w-full py-4 text-xl font-semibold text-gray-100 border buttom-0 rounded-xl font-jakartaPlus bg-primary hover:bg-primary/75"
      >
        <span className="mr-4 text-2xl">+</span> Create New
      </button>
    </div>
  );
};

export default ButtonCreate;
