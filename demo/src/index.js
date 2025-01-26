
import { info, log } from "@randajan/simple-lib/node";
import csInflect from "../../dist/index.js";

import assert from "assert";


// Testy
try {
    // Testy pro nulu
    assert.strictEqual(csInflect("# sekund[y|a|y]", 0, true), "0 sekund", "Nula sekund");
    assert.strictEqual(csInflect("# hodin[y|a|y|]", 0, true), "0 hodin", "Nula hodin");

    // Testy pro jednotné číslo
    assert.strictEqual(csInflect("# sekund[y|a|y]", 1), "1 sekunda", "Jedna sekunda");
    assert.strictEqual(csInflect("# hodin[y|a|y|]", 1), "1 hodina", "Jedna hodina");

    // Testy pro paukal (2–4)
    assert.strictEqual(csInflect("# sekund[y|a|y]", 2), "2 sekundy", "Dvě sekundy");
    assert.strictEqual(csInflect("# hodin[y|a|y|]", 3), "3 hodiny", "Tři hodiny");

    // Testy pro genitiv množného čísla (5 a více)
    assert.strictEqual(csInflect("# sekund[y|a|y]", 5), "5 sekund", "Pět sekund");
    assert.strictEqual(csInflect("# hodin[y|a|y|]", 10), "10 hodin", "Deset hodin");

    // Testy pro desetinná čísla
    assert.strictEqual(csInflect("# sekund[y|a|y]", 1.5), "1,5 sekundy", "Desetinné číslo (1.5 sekund)");
    assert.strictEqual(csInflect("# hodin[y|a|y|]", 0.5, true), "0,5 hodiny", "Desetinné číslo (0.5 hodin)");

    // Testy pro maximální počet desetinných míst
    assert.strictEqual(csInflect("# sekund[y|a|y]", 1.56789, false, 1), "1,6 sekundy", "Zaokrouhlení na 1 desetinné místo");
    assert.strictEqual(csInflect("# sekund[y|a|y]", 1.56789, false, 3), "1,568 sekundy", "Zaokrouhlení na 3 desetinná místa");

    console.log("Všechny testy proběhly úspěšně! ✅");
} catch (error) {
    console.error("Test selhal ❌:", error.message);
}