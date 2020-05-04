import { h } from 'preact';

import { TR } from './tr';
import { BaseComponent, BaseProps } from '../base';
import { TH } from './th';
import className from '../../util/className';
import Header from '../../header';

import '../../theme/mermaid/thead.scss';

interface THeadProps extends BaseProps {
  header: Header;
}

export class THead extends BaseComponent<THeadProps, {}> {
  render() {
    if (this.props.header) {
      return (
        <thead className={className('thead')}>
          <TR>
            {this.props.header.columns.map((col, i) => {
              return <TH column={col} index={i} />;
            })}
          </TR>
        </thead>
      );
    }

    return null;
  }
}
