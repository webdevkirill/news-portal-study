import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Input } from 'shared/ui/Input';

const MainPage = memo(() => {
  const { t } = useTranslation('main-page');
  const [value, setValue] = useState('dasdasd');

  return (
    <div>
      {t('title')}
      <Input placeholder="test" value={value} onChange={setValue} />
    </div>
  );
});

export default MainPage;
