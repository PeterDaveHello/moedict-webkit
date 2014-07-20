// Generated by LiveScript 1.2.0
(function(){
  var ref$, p, i, a, h1, div, main, span, br, h3, table, tr, td, th, input, inline, Result, List, slice$ = [].slice, replace$ = ''.replace;
  ref$ = React.DOM, p = ref$.p, i = ref$.i, a = ref$.a, h1 = ref$.h1, div = ref$.div, main = ref$.main, span = ref$.span, br = ref$.br, h3 = ref$.h3, table = ref$.table, tr = ref$.tr, td = ref$.td, th = ref$.th, input = ref$.input;
  inline = function(props){
    var args;
    props == null && (props = {});
    args = slice$.call(arguments, 1);
    return div.apply(null, [import$({
      style: {
        display: 'inline'
      }
    }, props)].concat(slice$.call(args)));
  };
  Result = React.createClass({
    render: function(){
      switch (this.props.type) {
      case 'list':
        return List(this.props);
      case 'html':
        return inline({
          dangerouslySetInnerHTML: {
            __html: this.props.html
          }
        });
      default:
        return div({});
      }
    }
  });
  List = React.createClass({
    render: function(it){
      var ref$, terms, id, h, lru, list, btn, re, t;
      ref$ = this.props, terms = ref$.terms, id = ref$.id, h = ref$.h, lru = ref$.lru;
      if (!terms) {
        return div({});
      }
      id = replace$.call(id, /^[@=]/, '');
      terms = replace$.call(terms, /^[^"]*/, '');
      list = [h1({
        itemProp: 'name'
      }, id)];
      if (id === '字詞紀錄簿' && !terms) {
        btn = i({
          className: 'icon-star-empty'
        });
        list = list.concat(p({
          className: 'bg-info'
        }, "（請按詞條右方的 ", btn, " 按鈕，即可將字詞加到這裡。）"));
      }
      function strToList(str){
        var re, t, it, results$ = [];
        re = /"([^"]+)"[^"]*/g;
        while (t = re.exec(str)) {
          it = t[1];
          results$.push(span({
            style: {
              clear: 'both',
              display: 'block'
            }
          }, '\u00B7', a({
            href: h + "" + it
          }, it)));
        }
        return results$;
      }
      if (/^";/.exec(terms)) {
        re = /";([^;"]+);([^;"]+)"[^"]*/g;
        list = list.concat(table.apply(null, [
          {}, tr.apply(null, [{}].concat((function(){
            var i$, ref$, len$, results$ = [];
            for (i$ = 0, len$ = (ref$ = ['臺', '陸']).length; i$ < len$; ++i$) {
              it = ref$[i$];
              results$.push(th({
                width: 200
              }, span({
                className: 'part-of-speech'
              }, it)));
            }
            return results$;
          }())))
        ].concat((function(){
          var results$ = [];
          while (t = re.exec(terms)) {
            results$.push(tr.apply(null, [{
              style: {
                borderTop: '1px solid #ccc'
              }
            }].concat((fn$()))));
          }
          return results$;
          function fn$(){
            var i$, ref$, len$, results$ = [];
            for (i$ = 0, len$ = (ref$ = [t[1], t[2]]).length; i$ < len$; ++i$) {
              it = ref$[i$];
              results$.push(td({}, a({
                href: h + "" + it
              }, it)));
            }
            return results$;
          }
        }()))));
      } else {
        list = list.concat(strToList(terms));
      }
      if (id === '字詞紀錄簿' && lru) {
        re = /"([^"]+)"[^"]*/g;
        list = list.concat((br({}), h3({
          id: 'lru'
        }, '最近查閱過的字詞', input({
          id: 'btn-clear-lru',
          type: 'button',
          className: 'btn-default btn btn-tiny',
          value: '清除',
          style: {
            marginLeft: '10px'
          }
        }))));
        list = list.concat(strToList(lru));
      }
      return inline.apply(null, [{}].concat(slice$.call(list)));
    }
  });
  $(function(){
    return (React.View || (React.View = {})).result = React.renderComponent(Result(), $('#result')[0]);
  });
  function import$(obj, src){
    var own = {}.hasOwnProperty;
    for (var key in src) if (own.call(src, key)) obj[key] = src[key];
    return obj;
  }
}).call(this);
