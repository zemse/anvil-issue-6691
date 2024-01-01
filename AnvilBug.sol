// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract AnvilBug {
    function main() external returns (uint x) {
        assembly {
            sstore(1, 1)
            x := sload(1)
        }
        this.f1();
    }

    function f1() external returns (uint x) {
        assembly {
            // sload same slot in another call context
            x := sload(1)
        }
    }
}
