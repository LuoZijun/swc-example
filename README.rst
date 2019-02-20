使用 SWC 开发 Web 应用
=========================

.. contents::

介绍
----------

`swc` 是一个使用 `rust` 编写的语法转译器，它支持将高版本的 `ECMAScript` 以及 `TypeScript` 代码翻译成 `ECMAScript` 早期版本（指主流浏览器能够无障碍解释的版本）的代码。同时还支持一些语言标准之外的语法特性转译为规范的 `ECMAScript` 代码, 比如 `JSX` 以及一些出现在早期的 `ECMAScript` 语法提议里面，但是最终并没有采纳的语法。


.. NOTE:
    
    当前这个项目还处于比较早期的阶段，可能不太适合生产环境。


前置依赖
----------

*   node
*   python3
*   cargo
*   npm ( or yarn )


Install
-----------

.. code:: bash
    
    # `px` command
    cargo install pax

    # Or yarn install @swc/cli @swc/core
    npm install -g npx
    npm install -g chokidar
    npm install -g @swc/cli @swc/core

    # Local dependencies ...
    npm install


Build
---------

..code:: bash
    
    make build && make dist


Run
---------

For NodeJS:

.. code:: bash
    
    node dist/bundle.js


For Browser:

.. code:: bash
    
    python3 -m http.server
    open "http://127.0.0.1:8000/index.html"
