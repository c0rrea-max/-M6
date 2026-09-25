// Exercício 10: Preparação do Ambiente de Depuração

console.log("===== EXERCÍCIO 10: Preparação do Ambiente de Depuração =====\n");

console.log("Como abrir as ferramentas de desenvolvedor e ativar o painel 'Sources':");
console.log("=".repeat(60) + "\n");

console.log("PASSO A PASSO:\n");

console.log("PASSO 1: Abrir DevTools");
console.log("-".repeat(60));
console.log(`
Windows/Linux: Pressionar F12 ou Ctrl+Shift+I
Mac:           Pressionar Cmd+Option+I
Alternativa:   Clicar com botão direito na página → "Inspecionar" ou "Inspect"
`);

console.log("\nPASSO 2: Navegue até o painel 'Sources'");
console.log("-".repeat(60));
console.log(`
• Procure a aba "Sources" na parte superior do DevTools
• Alguns navegadores (Firefox) chamam de "Debugger"
• Se não aparecer, clique em "»" (mais abas) para ver mais opções
`);

console.log("\nPASSO 3: Localizar seu arquivo JavaScript");
console.log("-".repeat(60));
console.log(`
• No lado esquerdo, expanda a árvore de arquivos
• Procure pelo arquivo .js que deseja depurar
• Pode estar sob pasta como localhost:3000/ ou similar
`);

console.log("\nPASSO 4: Adicionar um Breakpoint");
console.log("-".repeat(60));
console.log(`
• Clique no NÚMERO DA LINHA onde deseja pausar
• Um ponto azul/vermelho aparecerá indicando o breakpoint
• Você também pode clicar na linha e pressionar Ctrl+B
`);

console.log("\nPASSO 5: Recarregar a página");
console.log("-".repeat(60));
console.log(`
• Pressione F5 ou Ctrl+R para recarregar
• O código pausará automaticamente no breakpoint
• A execução fica em pausa naquela linha
`);

console.log("\nPASSO 6: Inspecionar Variáveis");
console.log("-".repeat(60));
console.log(`
• No lado direito, veja o painel "Scope"
• Mostra variáveis locais, globais, etc.
• Você pode passar o mouse sobre variáveis no código para ver seu valor
`);

console.log("\nPASSO 7: Retomar Execução");
console.log("-".repeat(60));
console.log(`
• Clique o botão "Resume" (▶) na barra de controle
• Ou pressione F8 para continuar
• O código prossegue até o próximo breakpoint
`);

console.log("\n\n" + "=".repeat(60));
console.log("NAVEGADORES PRINCIPAIS");
console.log("=".repeat(60) + "\n");

console.log("Chrome / Edge / Opera:");
console.log("  Atalho: F12");
console.log("  Painel: 'Sources'");
console.log("  Recursos: Completos de depuração\n");

console.log("Firefox:");
console.log("  Atalho: F12");
console.log("  Painel: 'Debugger'");
console.log("  Interface: Similar ao Chrome\n");

console.log("Safari (Mac):");
console.log("  Atalho: Cmd+Option+I");
console.log("  Painel: 'Debugger'");
console.log("  Setup: Preferences → Advanced → 'Show Develop menu'\n");

console.log("\n" + "=".repeat(60));
console.log("DICA: Console Integrado");
console.log("=".repeat(60));
console.log(`
Enquanto o código está pausado em um breakpoint, você pode:
  • Ir até o painel "Console"
  • Digitar comandos JavaScript para inspecionar variáveis
  • Exemplo: console.log(meuArray) enquanto pausado
`);

console.log("\n\n" + "=".repeat(60));
console.log("TABELA RESUMIDA");
console.log("=".repeat(60) + "\n");

const tabela = `
┌────────────────────────┬──────────────────┬───────────────────┐
│ Ação                   │ Windows/Linux     │ Mac               │
├────────────────────────┼──────────────────┼───────────────────┤
│ Abrir DevTools         │ F12               │ Cmd+Option+I      │
│ Ir a Sources           │ Clique em Sources │ Clique em Sources │
│ Adicionar breakpoint   │ Clique na linha   │ Clique na linha   │
│ Retomar execução       │ F8                │ Cmd+Option+→      │
│ Step Over              │ F10               │ F10               │
│ Step Into              │ F11               │ F11               │
└────────────────────────┴──────────────────┴───────────────────┘
`;

console.log(tabela);
