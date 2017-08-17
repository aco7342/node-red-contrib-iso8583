node-red-contrib-node-iso8583
=============================

A <a href="http://nodered.org" target="_new">Node-RED</a> node that convert a iso8583 array into msg, or convert a iso8583 txt msg into array.

Install
-------

Run the following command in your Node-RED user directory - typically `~/.node-red`

    npm install node-red-contrib-node-iso8583
    
    * dependency https://www.npmjs.com/package/iso-8583


Usage
-----
<pre><code>
If Input like a
       msg.payload = [
            [0, "0200"],
            [2, "60197105032103634"],
            [3, "001000"],
            [4, "15075"],
            [7, "0429104720"],
            [11, "456"],
            [12, "112233"],
            [41, "44449999"],
            [22, "02"],
            [125, "BLAH BLAH"]
       ];
    Output must be
       0200F2300400008000000000000000000008170601971050</b>
       321036340010000000000150750429104720000456112233</b>
       000234343434393939390009424C414820424C4148
</code></pre>
<pre><code>
And If input is a
       0200F2300400008000000000000000000008170601971050</b>
       321036340010000000000150750429104720000456112233</b>
       000234343434393939390009424C414820424C4148

    Output
       [ { key: '0', value: '0200' }, ,
         { key: '2', value: '60197105032103634' },
         { key: '3', value: '001000' },
         { key: '4', value: '000000015075' },
         { key: '7', value: '0429104720' },
         { key: '11', value: '000456' },
         { key: '12', value: '112233' },
         { key: '22', value: '002' },
         { key: '41', value: '44449999' },
         ... 26 more items 
       ]
</code></pre>
