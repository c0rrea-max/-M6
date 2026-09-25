// Exercício 14: Depuração Sem `debugger`

// Explique como você retomaria a execução normalmente depois de usar o breakpoint 
// no painel de ferramentas, e como removeria todos os breakpoints de uma vez.

console.log("===== EXERCÍCIO 14: Depuração Sem debugger =====\n");

console.log("=".repeat(60));
console.log("PARTE 1: Retomando Execução Após Breakpoint");
console.log("=".repeat(60) + "\n");

console.log("MÉTODO 1: Botão Resume (RECOMENDADO)");
console.log("-".repeat(60));
console.log(`
1. Localizar o botão "Resume" - está na barra de controle superior
2. Clique no ícone ▶ (play/resume)
3. O código continua executando até:
   • O próximo breakpoint, OU
   • O final do programa

ATALHO DO TECLADO: F8
`);

console.log("\nMÉTODO 2: Continuar com Step Over / Step Into");
console.log("-".repeat(60));
console.log(`
Se você quer avançar LINHA POR LINHA em vez de resumir completamente:

  • Step Over (F10):      Executa a próxima linha (não entra em função)
  • Step Into (F11):      Entra em uma função
  • Step Out (Shift+F11): Sai da função atual

Cada um executa um pouco e para novamente, permitindo acompanhar o progresso.
`);

console.log("\nMÉTODO 3: Continuar até um ponto específico");
console.log("-".repeat(60));
console.log(`
1. Clique com botão direito na linha onde quer retomar
2. Selecione "Continue to here" (nem todos navegadores têm)
3. Executa até aquela linha e para lá
`);

// ===== PARTE 2 =====

console.log("\n\n" + "=".repeat(60));
console.log("PARTE 2: Removendo Todos os Breakpoints");
console.log("=".repeat(60) + "\n");

console.log("MÉTODO 1: Via Painel Breakpoints (MAIS RÁPIDO)");
console.log("-".repeat(60));
console.log(`
1. Abra DevTools (F12)
2. Vá para a aba "Sources" (ou "Debugger")
3. Procure o painel "Breakpoints" no lado direito
4. Clique no ícone de "lixeira" (trash) ao lado de "Breakpoints"
5. ✓ Todos os breakpoints são removidos instantaneamente!

Aparência do painel:
  Breakpoints
    ✓ file.js:15
    ✓ file.js:42
    [🗑️ trash icon] ← clique aqui
`);

console.log("\nMÉTODO 2: Remover Manualmente Um a Um");
console.log("-".repeat(60));
console.log(`
1. Vá até a linha que tem breakpoint (número tem marca azul/vermelha)
2. Clique novamente no NÚMERO DA LINHA
3. O breakpoint desaparece

VANTAGEM: Controle manual, útil se quer manter alguns
DESVANTAGEM: Lento se há muitos breakpoints
`);

console.log("\nMÉTODO 3: Desativar em vez de Remover");
console.log("-".repeat(60));
console.log(`
Se quer TEMPORARIAMENTE DESATIVAR sem remover:

1. No painel "Breakpoints", clique no CHECKBOX (☑) ao lado
2. Desmarque para desativar
3. Deixa os breakpoints "adormecidos", sem remover

ÚTIL PARA: Reativar depois sem precisar adicionar novamente
`);

// ===== COMPARAÇÃO =====

console.log("\n\n" + "=".repeat(60));
console.log("COMPARAÇÃO DE MÉTODOS");
console.log("=".repeat(60) + "\n");

const tabelaComparacao = `
┌─────────────────────────────┬──────────────────┬────────┬──────────────┐
│ Ação                        │ Método           │ Atalho │ Velocidade   │
├─────────────────────────────┼──────────────────┼────────┼──────────────┤
│ Retomar execução            │ Clique Resume    │ F8     │ Rápida       │
│ Step linha a linha          │ Clique Step Over │ F10    │ Manual       │
│ Remover todos               │ Trash no painel  │ —      │ Muito rápida │
│ Remover um a um             │ Clique na linha  │ —      │ Lenta        │
│ Desativar temporário        │ Checkbox painel  │ —      │ Rápida       │
└─────────────────────────────┴──────────────────┴────────┴──────────────┘
`;

console.log(tabelaComparacao);

// ===== PASSO A PASSO PRÁTICO =====

console.log("\n" + "=".repeat(60));
console.log("PASSO A PASSO PRÁTICO");
console.log("=".repeat(60) + "\n");

console.log("CENÁRIO 1: Você tem 5 breakpoints e quer removê-los todos");
console.log("-".repeat(60));
console.log(`
DevTools aberto
    ↓
Clique em "Sources"
    ↓
Procure painel "Breakpoints" (lado direito)
    ↓
Clique no ícone 🗑️ (lixeira)
    ↓
✓ Todos os breakpoints removidos!
`);

console.log("\nCENÁRIO 2: Você estava no breakpoint e quer continuar");
console.log("-".repeat(60));
console.log(`
Código pausado em breakpoint
    ↓
Clique botão ▶ Resume (ou F8)
    ↓
O código executa normalmente
    ↓
✓ Para no próximo breakpoint ou termina
`);

// ===== DICAS PROFISSIONAIS =====

console.log("\n\n" + "=".repeat(60));
console.log("DICAS PROFISSIONAIS");
console.log("=".repeat(60) + "\n");

console.log("✓ BOAS PRÁTICAS:");
console.log("  • Remova debugger() antes de fazer commit");
console.log("    DevTools automaticamente avisa se há debugger no código");
console.log("  • Use breakpoints localizados");
console.log("    Não precisa de 20 breakpoints ao mesmo tempo");
console.log("  • Desative em vez de remover se vai usar novamente em breve");
console.log("  • Use 'Continue to here' para pular trechos durante testes\n");

console.log("✗ ERROS COMUNS:");
console.log("  • Esquecer de remover debugger; do código");
console.log("  • Deixar breakpoints antigos e se confundir por que pausa");
console.log("  • Clicar em Resume quando precisa clicar Step Over (ou vice-versa)");
console.log("  • Não limpar breakpoints e ter Debug lento");

// ===== RESUMO =====

console.log("\n\n" + "=".repeat(60));
console.log("RESUMO FINAL");
console.log("=".repeat(60) + "\n");

const resumo = `
┌──────────────────────────────┬────────────────────────────┐
│ Ação                         │ Como                       │
├──────────────────────────────┼────────────────────────────┤
│ Retomar após breakpoint      │ Clique ▶ Resume ou F8      │
│ Remover todos de uma vez     │ Clique 🗑️ painel Breakpts │
│ Remover um específico        │ Clique número da linha     │
│ Desativar temporário         │ Checkbox no painel         │
│ Step line-by-line            │ F10 (Over) ou F11 (Into)   │
│ Sair de função               │ Shift+F11 (Step Out)       │
└──────────────────────────────┴────────────────────────────┘
`;

console.log(resumo);

console.log("\n" + "=".repeat(60));
console.log("ATALHOS IMPORTANTES");
console.log("=".repeat(60));
console.log(`
F8          → Resume (continua até próximo breakpoint)
F10         → Step Over (próxima linha, não entra em função)
F11         → Step Into (entra em uma função)
Shift+F11   → Step Out (sai da função atual)
Ctrl+Shift+P → Procurar comando (DevTools)
`);

console.log("\n✓ Você agora sabe como depurar sem usar 'debugger'!");
