// Uncomment the line below when developing:
// import {} from "jasmine";

import { deepCopyObject } from "../src/tsutil";

describe("TsUtil", () => {

  beforeEach(() => {
  });

  it("should make a deep copy of an object", () => {

    let obj: any = {};

    obj = {
      list: {
        loo9: {
          nossa: null,
          id: "0oVwOM",
          parent: "pTlmbh",
          name: "New node",
          created_at: 1384289621
        },
        aHxe8k: {
          id: "aHxe8k",
          parent: "Fhs2hL",
          name: "hjkhjkhjk",
          created_at: 1384354593
        },
        Fhs2hL: {
          id: "Fhs2hL",
          parent: "root",
          name: "test",
          created_at: 1383403881
        },
        HYPSgv: {
          id: "HYPSgv",
          parent: "0oVwOM",
          name: "New node",
          created_at: 1384342657
        },
        osFIMf: {
          id: "osFIMf",
          parent: "root",
          name: "New node",
          created_at: 1384354584
        },
        PsovXE: {
          id: "PsovXE",
          parent: "root",
          name: "hjkhjkhjk",
          created_at: 1384354589
        },
        pTlmbh: {
          id: "pTlmbh",
          parent: "Fhs2hL",
          name: "New node",
          created_at: 1384289277
        },
        RbXhdJ: {
          id: "RbXhdJ",
          parent: "root",
          name: "empty",
          created_at: 1384359806
        }
      },
      maps: {
        parent: {
          pTlmbh: {
            "0oVwOM": {
              id: "0oVwOM",
              parent: "pTlmbh",
              name: "New node",
              created_at: 1384289621
            }
          },
          Fhs2hL: {
            aHxe8k: {
              id: "aHxe8k",
              parent: "Fhs2hL",
              name: "hjkhjkhjk",
              created_at: 1384354593
            },
            pTlmbh: {
              id: "pTlmbh",
              parent: "Fhs2hL",
              name: "New node",
              created_at: 1384289277
            }
          },
          root: {
            Fhs2hL: {
              id: "Fhs2hL",
              parent: "root",
              name: "test",
              created_at: 1383403881
            },
            osFIMf: {
              id: "osFIMf",
              parent: "root",
              name: "New node",
              created_at: 1384354584
            },
            PsovXE: {
              id: "PsovXE",
              parent: "root",
              name: "hjkhjkhjk",
              created_at: 1384354589
            },
            RbXhdJ: {
              id: "RbXhdJ",
              parent: "root",
              name: "empty",
              created_at: 1384359806
            }
          },
          "0oVwOM": {
            HYPSgv: {
              id: "HYPSgv",
              parent: "0oVwOM",
              name: "New node",
              created_at: 1384342657
            }
          }
        },
        path: [
          [
            "Fhs2hL"
          ],
          [
            "Fhs2hL",
            "aHxe8k"
          ],
          [
            "Fhs2hL",
            "pTlmbh"
          ],
          [
            "Fhs2hL",
            "pTlmbh",
            "0oVwOM"
          ],
          [
            "Fhs2hL",
            "pTlmbh",
            "0oVwOM",
            "HYPSgv"
          ],
          [
            "osFIMf"
          ],
          [
            "PsovXE"
          ],
          [
            "RbXhdJ"
          ]
        ]
      }
    };

    const out = deepCopyObject(obj);

    expect(out.list.loo9.nossa).toBeNull();
    expect(out.list.loo9.id).toEqual("0oVwOM");
    expect(out.maps.path.length).toEqual(8);
    expect(out.maps.path[7]).toEqual(["RbXhdJ"]);
  });
});
