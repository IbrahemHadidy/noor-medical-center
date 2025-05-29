'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useLogoutMutation } from '@/lib/api/endpoints/auth';
import { clearUser } from '@/lib/features/auth/auth-slice';
import { Link, useRouter } from '@/lib/i18n/navigation';
import { useAppDispatch, useAppSelector } from '@/lib/store';
import { Role } from '@generated/client';
import {
  Calendar,
  CheckCircle,
  Clock,
  History,
  Home,
  LoaderCircle,
  LogOut,
  PanelLeftIcon,
  UserPlus,
  Users,
} from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Logo } from './logo';

type SidebarItem = {
  title: string;
  url: string;
  icon: typeof Home;
};

const items = (
  t: ReturnType<typeof useTranslations<'Layout.Sidebar'>>,
  role: Role
): SidebarItem[] => {
  if (role === Role.ADMIN) {
    return [
      {
        title: t('home'),
        url: '/dashboard',
        icon: Home,
      },
      {
        title: t('appointments'),
        url: '/dashboard/admin/appointments',
        icon: Calendar,
      },
      {
        title: t('patients'),
        url: '/dashboard/admin/users',
        icon: Users,
      },
      {
        title: t('verify-doctors'),
        url: '/dashboard/admin/reservations',
        icon: CheckCircle,
      },
    ];
  } else if (role === Role.DOCTOR) {
    return [
      {
        title: t('home'),
        url: '/dashboard',
        icon: Home,
      },
      {
        title: t('appointments'),
        url: '/dashboard/doctor/appointments',
        icon: Calendar,
      },
      {
        title: t('availability'),
        url: '/dashboard/doctor/availability',
        icon: Clock,
      },
    ];
  } else {
    return [
      {
        title: t('home'),
        url: '/dashboard',
        icon: Home,
      },
      {
        title: t('history'),
        url: '/dashboard/patient/history',
        icon: History,
      },
    ];
  }
};

export function Sidebar() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('Layout.Sidebar');
  const { toggleSidebar, setOpen } = useSidebar();
  const [logout, { isLoading }] = useLogoutMutation();
  const { user } = useAppSelector((state) => state.auth);
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const isRTL = locale === 'ar';

  useEffect(() => {
    if (user && !isInitialized) {
      setOpen(true);
      setIsInitialized(true);
    }
  }, [isInitialized, setOpen, user]);

  const handleLogout = async () => {
    await logout().unwrap();
    dispatch(clearUser());
    setOpen(false);
    router.push('/');
  };

  return (
    <SidebarContainer side={isRTL ? 'right' : 'left'} className="z-100 flex flex-row">
      <SidebarHeader>
        <Link href="/" className="flex w-full justify-center">
          <Logo className="h-24 w-auto" />
        </Link>
        <Separator />
        {user ? (
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarFallback>
                  {user.firstName[0]}
                  {user.lastName[0]}
                </AvatarFallback>
                {user.image && (
                  <AvatarImage
                    src={Buffer.from(user.image).toString('base64')}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                )}
              </Avatar>
              <div className="flex flex-col">
                <span className="truncate font-medium">
                  {user.firstName} {user.lastName}
                </span>
                <span className="text-muted-foreground truncate">{t(`Role.${user.role}`)}</span>
              </div>
            </div>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" onClick={handleLogout} className="flex items-center gap-2">
                  {isLoading ? (
                    <LoaderCircle className="h-4 w-4 animate-spin" />
                  ) : (
                    <LogOut className="h-4 w-4" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent className="z-1000">
                <p className="text-foreground">{t('logout')}</p>
              </TooltipContent>
            </Tooltip>
          </div>
        ) : (
          <div className="flex flex-col items-start gap-1">
            <Link href="/login" className="w-full">
              <SidebarMenuButton className="w-full justify-start">
                <LogOut className="h-4 w-4" />
                {t('login')}
              </SidebarMenuButton>
            </Link>
            <Link href="/register" className="w-full">
              <SidebarMenuButton className="w-full justify-start">
                <UserPlus className="h-4 w-4" />
                {t('register')}
              </SidebarMenuButton>
            </Link>
          </div>
        )}
        <Separator />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('dashboard')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {user &&
                items(t, user.role).map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url} className="flex w-full items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <Separator />
        <SidebarMenuButton onClick={toggleSidebar} className="cursor-pointer">
          <PanelLeftIcon />
          <span>{t('closeSidebar')}</span>
        </SidebarMenuButton>
      </SidebarFooter>
    </SidebarContainer>
  );
}
