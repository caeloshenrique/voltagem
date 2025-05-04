
import React from 'react';

function App() {
  return (
    <div className=\"bg-green-100 min-h-screen p-4\">
      <header className=\"text-center py-8\">
        <h1 className=\"text-4xl font-bold text-green-700\">Voltagem Energia</h1>
        <p className=\"text-green-600\">Soluções em energia e geradores (fictício)</p>
      </header>
      <main className=\"max-w-3xl mx-auto\">
        <section className=\"my-8\">
          <h2 className=\"text-2xl font-semibold text-green-700\">Sobre Nós</h2>
          <p>Somos uma empresa fictícia especializada em soluções de energia limpa e sustentável.</p>
        </section>
        <section className=\"my-8\">
          <h2 className=\"text-2xl font-semibold text-green-700\">Serviços</h2>
          <ul className=\"list-disc ml-5\">
            <li>Instalação de geradores</li>
            <li>Manutenção preventiva</li>
            <li>Consultoria energética</li>
          </ul>
        </section>
        <section className=\"my-8\">
          <h2 className=\"text-2xl font-semibold text-green-700\">Contato</h2>
          <p>Email: contato@voltagemenergia.com</p>
          <p>Telefone: (11) 99999-9999</p>
        </section>
      </main>
      <footer className=\"text-center text-green-600 mt-8\">
        © 2025 Voltagem Energia. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
