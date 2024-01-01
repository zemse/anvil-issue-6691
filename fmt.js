const fs = require("fs");

fmt("./anvil.json");
fmt("./geth.json");

function fmt(file_name) {
  const obj = require(file_name);
  const updated = {
    failed: obj.failed,
    gas: obj.gas,
    returnValue: obj.returnValue,
    structLogs: obj.structLogs.map((s) => ({
      ...Object.fromEntries(
        Object.entries(s).sort((s1, s2) => (s1[0] > s2[0] ? 1 : -1))
      ),
    })),
  };
  fs.writeFileSync(file_name, JSON.stringify(updated, null, 2));
}
