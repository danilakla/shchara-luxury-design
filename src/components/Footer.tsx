const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <p className="text-muted-foreground text-xs font-body">
          © {new Date().getFullYear()} Гостиница «Щара». Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
