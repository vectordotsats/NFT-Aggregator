// SPDX-License-Identifier: MIT

pragma solidity ^0.8.27;

import {ERC7786Receiver} from "../../crosschain/utils/ERC7786Receiver.sol";

contract ERC7786ReceiverMock is ERC7786Receiver {
    address private immutable _gateway;

    event MessageReceived(
        address gateway,
        string messageId,
        string source,
        string sender,
        bytes payload,
        bytes[] attributes
    );

    constructor(address gateway_) {
        _gateway = gateway_;
    }

    function _isKnownGateway(address instance) internal view virtual override returns (bool) {
        return instance == _gateway;
    }

    function _processMessage(
        address gateway,
        string calldata messageId,
        string calldata source,
        string calldata sender,
        bytes calldata payload,
        bytes[] calldata attributes
    ) internal virtual override {
        emit MessageReceived(gateway, messageId, source, sender, payload, attributes);
    }
}
