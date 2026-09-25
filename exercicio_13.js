// Exercício 13: Call Stack

// Com base no exercício 12, faça um diagrama simples (em texto) mostrando a 
// call stack no momento em que `interno` está sendo executado.

console.log("===== EXERCÍCIO 13: Call Stack =====\n");

console.log("DEFINIÇÃO:");
console.log("=".repeat(60));
console.log(`
Call Stack = Pilha de funções em execução

Representa a ordem em que as funções foram chamadas e 
qual está sendo executada neste momento.
`);

console.log("\n" + "=".repeat(60));
console.log("ESTADO: Cuando interno() está sendo executada");
console.log("=".repeat(60) + "\n");

console.log("Call Stack (do topo para a base):\n");
console.log("  ▼ interno(4)  ← TOPO (execução AQUI!)");
console.log("    └─ m = 4 (parâmetro)");
console.log("    └─ dobro = 12 (variável local)\n");

console.log("  ▼ externo(4)  ← Chamador de interno");
console.log("    └─ n = 4 (parâmetro)");
console.log("    └─ Esperando retorno de interno()\n");

console.log("  ▼ Global  ← Raiz (programa principal)");
console.log("    └─ Chamador de externo()\n");

// ===== DEMONSTRAÇÃO VISUAL =====

console.log("\n" + "=".repeat(60));
console.log("VISUALIZAÇÃO PASSO A PASSO");
console.log("=".repeat(60) + "\n");

console.log("PASSO 1: ANTES (ainda não chamou interno)");
console.log("-".repeat(60));
console.log(`
Call Stack:
  ▼ externo(4)  ← ATIVO (execução aqui)
    |  const resultado = interno(n);  ← Nesta linha
    |
Global
`);

console.log("\n\nPASSO 2: DURANTE (inside interno)");
console.log("-".repeat(60));
console.log(`
Call Stack:
  ▼ interno(4)  ← TOPO (execução AQUI agora!)
    |
  ▼ externo(4)  ← Esperando interno() retornar
    |
Global
`);

console.log("\n\nPASSO 3: DEPOIS (retornou de interno)");
console.log("-".repeat(60));
console.log(`
Call Stack:
  ▼ externo(4)  ← De volta para cá
    |  console.log("← De volta em externo")  ← Nesta linha agora
    |
Global
`);

// ===== EXEMPLO ESTENDIDO =====

console.log("\n\n" + "=".repeat(60));
console.log("EXEMPLO ESTENDIDO: 3 Funções Aninhadas");
console.log("=".repeat(60) + "\n");

console.log("Código:");
console.log("-".repeat(60));
console.log(`
function a() { return b(); }
function b() { return c(); }
function c() { 
  debugger;  ← Aqui o stack é...
  return 42; 
}
a();
`);

console.log("\nCall Stack quando c() está executando:");
console.log("-".repeat(60));
console.log(`
  ▼ c()  ← TOPO (execução AQUI)
    |
  ▼ b()  ← Chamou c()
    |
  ▼ a()  ← Chamou b()
    |
Global
`);

console.log("\nLeitura do stack (de cima para baixo):");
console.log("  Frame 0: c() ← Atual (topo)");
console.log("  Frame 1: b() ← Anteriormente ativo");
console.log("  Frame 2: a() ← Antes disso");
console.log("  Frame 3: Global ← Base da pilha");

// ===== CARACTERÍSTICAS DO CALL STACK =====

console.log("\n\n" + "=".repeat(60));
console.log("CARACTERÍSTICAS DO CALL STACK");
console.log("=".repeat(60) + "\n");

console.log("LIFO (Last In, First Out):");
console.log("  ✓ Último que entrou é o primeiro a sair");
console.log("  ✓ Quando uma função retorna, é removida do stack\n");

console.log("Cada frame (nível) contém:");
console.log("  ✓ Nome da função");
console.log("  ✓ Parâmetros")
console.log("  ✓ Variáveis locais");
console.log("  ✓ Posição no código (arquivo:linha)\n");

console.log("Tamanho máximo:");
console.log("  ⚠ Stack overflow → recursão infinita");
console.log("  ⚠ Se chamar muitas funções aninhadas, estoura memória\n");

// ===== FUNÇÃO DEMOSTRATIVA =====

console.log("\n" + "=".repeat(60));
console.log("DEMONSTRAÇÃO REAL");
console.log("=".repeat(60) + "\n");

function nivel3(valor) {
  console.log("  [Nível 3] valor =", valor);
  return valor * 2;
}

function nivel2(valor) {
  console.log("[Nível 2] Chamando nivel3...");
  const res = nivel3(valor);
  console.log("[Nível 2] Retornou de nivel3:", res);
  return res + 10;
}

function nivel1(valor) {
  console.log("Nível 1: Chamando nivel2...");
  const res = nivel2(valor);
  console.log("Nível 1: Retornou de nivel2:", res);
  return res + 100;
}

console.log("Executando: nivel1(5)\n");
const resultado = nivel1(5);
console.log("Resultado final:", resultado);

console.log("\n\nStack durante execução:");
console.log("  Durante nivel3: [nivel3] → [nivel2] → [nivel1] → [Global]");
console.log("  Durante nivel2: [nivel2] → [nivel1] → [Global]");
console.log("  Durante nivel1: [nivel1] → [Global]");

console.log("\n\n" + "=".repeat(60));
console.log("COMO VISUALIZAR NO DEVTOOLS");
console.log("=".repeat(60));
console.log(`
1. Abra DevTools (F12)
2. Vá para "Sources" (ou "Debugger")
3. Coloque um breakpoint ou debugger
4. Procure no lado direito por "Call Stack"
5. Você verá cada frame listado
`);
